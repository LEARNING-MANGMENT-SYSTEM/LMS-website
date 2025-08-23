import React, { useRef, useState } from "react";
interface FileUploadFormProps {
  onFileSelect: (file: File) => void;
  acceptedTypes?: string;
  maxFileSize?: number;
  multiple?: boolean;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({
  onFileSelect,
  acceptedTypes = "*",
  maxFileSize = 10485760,
  multiple = false,
}) => {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const validateFile = (file: File): boolean => {
    setError("");
    if (file.size > maxFileSize) {
      setError(
        `File size exceeds the maximum limit of ${maxFileSize / 1048576} MB.`
      );
      return false;
    }
    if (acceptedTypes !== "*") {
      const allowedTypes = acceptedTypes.split(",").map((type) => type.trim());
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
      // const mimeType = file.type;

      if (!isAllowed) {
        setError(
          `File type ${fileExtension} is not allowed. Allowed types: ${allowedTypes.join(
            ", "
          )}`
        );
        return false;
      }
    }
    return true;
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragOver(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };
  const handleBrowerClick = (): void => {
    fileInputRef.current?.click();
  };
//   const formatFileSize = (bytes: number): string => {
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer  ${
          dragOver ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBrowerClick}
      >
        <div className="space-y-2">
            <h6>Attach File </h6>
          <p className="text-gray-600">
            Drag and drop a file here or <span className="text-blue-600 hover:text-blue-700 cursor-pointer underline">browse file </span>
          </p>
        </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          accept={acceptedTypes}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
        />
     
      {error && (
        <div className="bg-red-100 border border-red-300  rounded-md">
                    <p className="text-red-500">{error}</p>
        </div>
        )}
    </div>
  );
};

export default FileUploadForm;
