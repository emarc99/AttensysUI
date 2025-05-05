import React, { useEffect, useState } from "react";
import { Contract } from "starknet";
import { attensysCourseAbi } from "@/deployments/abi";
import { attensysCourseAddress } from "@/deployments/contracts";
import { provider } from "@/constants";
import { useAccount } from "@starknet-react/core";
import { usePinataAccess } from "@/hooks/usePinataAccess";

interface EditCoursePanelProps {
  isOpen: boolean;
  onClose: () => void;
  course: any;
  onSave: (updatedCourse: any) => void;
  isUpdating: boolean;
  updateSuccess: boolean;
}

const EditCoursePanel: React.FC<EditCoursePanelProps> = ({
  isOpen,
  onClose,
  course,
  onSave,
  isUpdating,
  updateSuccess,
}) => {
  const [formData, setFormData] = useState({
    courseName: course?.data?.courseName || "",
    difficultyLevel: course?.data?.difficultyLevel || "",
    courseDescription: course?.data?.courseDescription || "",
    courseCategory: course?.data?.courseCategory || "",
    studentRequirements: course?.data?.studentRequirements || "",
    learningObjectives: course?.data?.learningObjectives || "",
    courseCurriculum: course?.data?.courseCurriculum || [],
  });

  const [activeSection, setActiveSection] = useState("basic");
  const [editingLecture, setEditingLecture] = useState<any>(null);
  const { account } = useAccount();
  const { createAccessLink } = usePinataAccess();

  useEffect(() => {
    if (course) {
      setFormData({
        courseName: course.data.courseName || "",
        difficultyLevel: course.data.difficultyLevel || "",
        courseDescription: course.data.courseDescription || "",
        courseCategory: course.data.courseCategory || "",
        studentRequirements: course.data.studentRequirements || "",
        learningObjectives: course.data.learningObjectives || "",
        courseCurriculum: course.data.courseCurriculum || [],
      });
    }
  }, [course]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLectureChange = (index: number, field: string, value: string) => {
    const updatedCurriculum = [...formData.courseCurriculum];
    updatedCurriculum[index] = {
      ...updatedCurriculum[index],
      [field]: value,
    };
    setFormData((prev) => ({
      ...prev,
      courseCurriculum: updatedCurriculum,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...course,
      data: {
        ...course.data,
        ...formData,
      },
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-1/2 bg-gradient-to-br from-[#F5F7FA] to-[#E8EAF6] shadow-lg transform transition-all duration-500 ease-in-out z-[100] ${
          isOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        <div
          className={`p-6 h-full overflow-y-auto transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#2D3A4B] transform transition-all duration-300 hover:scale-105">
              {updateSuccess ? "Success!" : "Edit Course"}
            </h2>
            <button
              onClick={onClose}
              className="text-[#A01B9B] hover:text-[#4A90E2] transition-all duration-300 transform hover:rotate-90"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {isUpdating ? (
            <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A01B9B]"></div>
              <p className="mt-4 text-[#2D3A4B]">Updating course...</p>
            </div>
          ) : updateSuccess ? (
            <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="mt-4 text-[#2D3A4B]">
                Course updated successfully!
              </p>
            </div>
          ) : (
            <>
              {/* Navigation Tabs */}
              <div className="flex space-x-4 mb-6 border-b border-[#A01B9B]/20">
                <button
                  onClick={() => setActiveSection("basic")}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === "basic"
                      ? "text-[#A01B9B] border-b-2 border-[#A01B9B]"
                      : "text-[#2D3A4B] hover:text-[#4A90E2]"
                  }`}
                >
                  Basic Info
                </button>
                <button
                  onClick={() => setActiveSection("details")}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === "details"
                      ? "text-[#A01B9B] border-b-2 border-[#A01B9B]"
                      : "text-[#2D3A4B] hover:text-[#4A90E2]"
                  }`}
                >
                  Course Details
                </button>
                <button
                  onClick={() => setActiveSection("curriculum")}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === "curriculum"
                      ? "text-[#A01B9B] border-b-2 border-[#A01B9B]"
                      : "text-[#2D3A4B] hover:text-[#4A90E2]"
                  }`}
                >
                  Curriculum
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info Section */}
                {activeSection === "basic" && (
                  <div className="space-y-6">
                    <div className="transform transition-all duration-300 hover:scale-[1.02]">
                      <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                        Course Name
                      </label>
                      <input
                        type="text"
                        name="courseName"
                        value={formData.courseName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-[1.02]">
                      <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                        Course Category
                      </label>
                      <select
                        name="courseCategory"
                        value={formData.courseCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200 appearance-none bg-white"
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">
                          Mobile Development
                        </option>
                        <option value="Data Science">Data Science</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Design">Design</option>
                      </select>
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-[1.02]">
                      <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                        Difficulty Level
                      </label>
                      <select
                        name="difficultyLevel"
                        value={formData.difficultyLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200 appearance-none bg-white"
                        required
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Course Details Section */}
                {activeSection === "details" && (
                  <div className="space-y-6">
                    <div className="transform transition-all duration-300 hover:scale-[1.02]">
                      <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                        Course Description
                      </label>
                      <textarea
                        name="courseDescription"
                        value={formData.courseDescription}
                        onChange={handleChange}
                        rows={8}
                        className="w-full px-4 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-[1.02]">
                      <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                        Student Requirements
                      </label>
                      <textarea
                        name="studentRequirements"
                        value={formData.studentRequirements}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-[1.02]">
                      <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                        Learning Objectives
                      </label>
                      <textarea
                        name="learningObjectives"
                        value={formData.learningObjectives}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Curriculum Section */}
                {activeSection === "curriculum" && (
                  <div className="space-y-6">
                    {formData.courseCurriculum.map(
                      (lecture: any, index: number) => (
                        <div
                          key={index}
                          className="transform transition-all duration-300 hover:scale-[1.02] bg-white p-4 rounded-lg shadow-sm"
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-[#2D3A4B]">
                              Lecture {index + 1}
                            </h3>
                            <button
                              type="button"
                              onClick={() =>
                                setEditingLecture(
                                  editingLecture === index ? null : index,
                                )
                              }
                              className="text-[#4A90E2] hover:text-[#357ABD] transition-colors duration-200"
                            >
                              {editingLecture === index ? "Done" : "Edit"}
                            </button>
                          </div>

                          {editingLecture === index ? (
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                                  Lecture Title
                                </label>
                                <input
                                  type="text"
                                  value={lecture.name}
                                  onChange={(e) =>
                                    handleLectureChange(
                                      index,
                                      "name",
                                      e.target.value,
                                    )
                                  }
                                  className="w-full px-3 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-[#2D3A4B] mb-1">
                                  Description
                                </label>
                                <textarea
                                  value={lecture.description}
                                  onChange={(e) =>
                                    handleLectureChange(
                                      index,
                                      "description",
                                      e.target.value,
                                    )
                                  }
                                  rows={6}
                                  className="w-full px-3 py-2 border-2 border-[#A01B9B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A01B9B] focus:border-transparent transition-all duration-200"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <p className="text-[#2D3A4B] font-medium">
                                {lecture.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {lecture.description}
                              </p>
                            </div>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                )}

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-[#2D3A4B] bg-[#F5F7FA] rounded-md hover:bg-[#E8EAF6] transition-all duration-300 transform hover:scale-105 border-2 border-[#A01B9B]/20"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-gradient-to-r from-[#A01B9B] to-[#4A90E2] rounded-md hover:from-[#8B1686] hover:to-[#357ABD] transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EditCoursePanel;
