import { Contract } from "starknet";
import { attensysCourseAbi } from "@/deployments/abi";
import { attensysCourseAddress } from "@/deployments/contracts";
import { provider } from "@/constants";

const handleConfirmDelete = async () => {
  if (!courseToDelete) return;

  try {
    const courseContract = new Contract(
      attensysCourseAbi,
      attensysCourseAddress,
      provider,
    );
    courseContract.connect(wallet?.account);

    // Convert course identifier to u256 format
    const courseIdentifier = {
      low: BigInt(courseToDelete.course_identifier),
      high: BigInt(0),
    };

    const myCall = courseContract.populate("remove_course", [courseIdentifier]);

    const res = await courseContract.remove_course(myCall.calldata);
    await provider.waitForTransaction(res.transaction_hash);

    // Close modal and refresh courses list
    setIsDeleteModalOpen(false);
    setCourseToDelete(null);
    // You might want to add a refresh function here to update the courses list
  } catch (error) {
    console.error("Error deleting course:", error);
    // You might want to show an error message to the user
  }
};
