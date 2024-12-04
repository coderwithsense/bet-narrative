import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { Plus, Wand2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const CreateStoryButton = ({ className }: { className?: string }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");
  const [initialContext, setInitialContext] = useState("");
  const [length, setLength] = useState("");
  const [structure, setStructure] = useState("");
  const [tone, setTone] = useState("");
  const [validationErrors, setValidationErrors] = useState<
    Record<string, boolean>
  >({});

  const validateForm = () => {
    const errors: Record<string, boolean> = {};

    if (!title) errors.title = true;
    if (!genre) errors.genre = true;
    if (!summary) errors.summary = true;
    if (!length) errors.length = true;
    if (!structure) errors.structure = true;
    if (!tone) errors.tone = true;

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateStory = () => {
    if (validateForm()) {
      console.log("Story created with the following details:", {
        title,
        genre,
        summary,
        initialContext,
        length,
        structure,
        tone,
      });
    }
  };

  const handleGenerateAIContext = () => {
    setInitialContext(
      "AI-generated initial context based on your story parameters..."
    );
  };

  return (
    <div className={className}>
      <Modal>
        <ModalTrigger className="btn-primary">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-1">
              CREATE STORY <Plus />
            </span>
          </button>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Wand2 className="text-black-500" /> Create a New Story
            </h2>
            <div className="space-y-4 max-h-[70vh] overflow-y-auto p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setValidationErrors((prev) => ({ ...prev, title: false }));
                  }}
                  className={`${validationErrors.title ? "border-red-500 focus:ring-red-500" : ""}`}
                />
                {validationErrors.title && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={16} /> Title is required
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Genre(s)
                </label>
                <Select
                  value={genre}
                  onValueChange={(value) => {
                    setGenre(value);
                    setValidationErrors((prev) => ({ ...prev, genre: false }));
                  }}
                >
                  <SelectTrigger
                    className={validationErrors.genre ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                    <SelectItem value="thriller">Thriller</SelectItem>
                  </SelectContent>
                </Select>
                {validationErrors.genre && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={16} /> Genre is required
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Summary
                </label>
                <Textarea
                  value={summary}
                  onChange={(e) => {
                    setSummary(e.target.value);
                    setValidationErrors((prev) => ({
                      ...prev,
                      summary: false,
                    }));
                  }}
                  className={`${validationErrors.summary ? "border-red-500 focus:ring-red-500" : ""}`}
                  placeholder="Briefly describe your story..."
                />
                {validationErrors.summary && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={16} /> Summary is required
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Initial Context
                </label>
                <Textarea
                  value={initialContext}
                  onChange={(e) => setInitialContext(e.target.value)}
                  placeholder="Optional initial story context..."
                />
                <Button
                  variant="outline"
                  className="mt-2 flex items-center gap-2"
                  onClick={handleGenerateAIContext}
                >
                  <Wand2 className="text-black-500" /> Generate AI Context
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Length
                  </label>
                  <Select
                    value={length}
                    onValueChange={(value) => {
                      setLength(value);
                      setValidationErrors((prev) => ({
                        ...prev,
                        length: false,
                      }));
                    }}
                  >
                    <SelectTrigger
                      className={
                        validationErrors.length ? "border-red-500" : ""
                      }
                    >
                      <SelectValue placeholder="Select Length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short Story</SelectItem>
                      <SelectItem value="novella">Novella</SelectItem>
                      <SelectItem value="epic">Epic Series</SelectItem>
                    </SelectContent>
                  </Select>
                  {validationErrors.length && (
                    <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} /> Length is required
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Structure
                  </label>
                  <Select
                    value={structure}
                    onValueChange={(value) => {
                      setStructure(value);
                      setValidationErrors((prev) => ({
                        ...prev,
                        structure: false,
                      }));
                    }}
                  >
                    <SelectTrigger
                      className={
                        validationErrors.structure ? "border-red-500" : ""
                      }
                    >
                      <SelectValue placeholder="Select Structure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chapter-based">
                        Chapter-based
                      </SelectItem>
                      <SelectItem value="linear">Linear</SelectItem>
                      <SelectItem value="non-linear">Non-linear</SelectItem>
                    </SelectContent>
                  </Select>
                  {validationErrors.structure && (
                    <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} /> Structure is required
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tone and Style
                </label>
                <Select
                  value={tone}
                  onValueChange={(value) => {
                    setTone(value);
                    setValidationErrors((prev) => ({ ...prev, tone: false }));
                  }}
                >
                  <SelectTrigger
                    className={validationErrors.tone ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select Tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lighthearted">Lighthearted</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="dramatic">Dramatic</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                    <SelectItem value="philosophical">Philosophical</SelectItem>
                  </SelectContent>
                </Select>
                {validationErrors.tone && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={16} /> Tone is required
                  </div>
                )}
              </div>
            </div>

            <ModalFooter>
              <Button
                variant="ghost"
                className="w-full"
                onClick={handleCreateStory}
              >
                Create Story
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateStoryButton;
