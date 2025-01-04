import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/modal";
import { useSendTransaction } from 'wagmi';
import { useCreatorStories } from "./context/FlowContext";
import { Spacer } from "@nextui-org/spacer";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { PlusIcon } from "lucide-react";
import { parseEther } from "ethers";

type Story = {
  title: string;
  description: string;
  coverImage: string;
};

export default function SortaStoryV2() {
  const [story, setStory] = useState<Story>({
    title: "",
    description: "",
    coverImage: "",
  });

  const { stories, addStory, addNFTCard } = useCreatorStories();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: hash, sendTransaction } = useSendTransaction();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStory((prevStory) => ({
      ...prevStory,
      [name]:
        name === "progress" || name === "totalBets" || name === "totalEarnings"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (onClose: () => void) => {
    addStory(story);
    addNFTCard({
      title: story.title,
      description: story.description,
      coverImage: story.coverImage,
      ownerVerified: true,
      ownerImage:
        "https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000",
        ownerName: "James"
    });
    sendTransaction({ to: "0x75c420b422b9A4cbB67F3895eF9b5B72d4884B78", value: parseEther("0.0001") })
    onClose();
  };

  return (
    <div className="flex justify-end w-full">
      <Button onPress={onOpen} className="bg-green-700">Create Story  <PlusIcon /></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new story
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onClose);
                  }}
                >
                  <Input
                    fullWidth
                    label="Title"
                    placeholder="Enter story title"
                    name="title"
                    value={story.title}
                    onChange={handleChange}
                    required
                  />
                  <Spacer y={1} />
                  <Textarea
                    fullWidth
                    label="Description"
                    placeholder="Enter story description"
                    name="description"
                    value={story.description}
                    onChange={handleChange}
                    required
                  />
                  <Spacer y={1} />
                  <Input
                    fullWidth
                    label="Cover Image URL"
                    placeholder="Enter cover image URL"
                    name="coverImage"
                    value={story.coverImage}
                    onChange={handleChange}
                    required
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleSubmit(onClose)}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
