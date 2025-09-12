
import { RouterProvider } from "react-router-dom";
import routes from "./components/Navigation/Routes";




function App() {
  
  return (
    <>
      <RouterProvider router={routes} />
      {/* <Headersignin/>
          <div className="p-6">
        <button
          onClick={() => setFileModalOpen(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          open File Upload Modal
        </button>
      </div>
        <div className="p-6">
        <button
          onClick={() => setFileModalOpen(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          open File Upload Modal
        </button>
      </div>

        <Modal
        i isOpen={notesModalOpen}
        onClose={() => setFileModalOpen(false)}
        title="Confirm File Upload"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
       
        onConfirm={handleFileConfirm}
        showCloseIcon={true}

      >
        <NotesForm 
         notes={notesData.content}
        onNotesChange={handleNotesChange}
        placeholder="Add your notes here..."
        maxLength={1000}
        rows={4}
        />  
         </Modal>
           <Modal
        isOpen={fileModalOpen}
        onClose={() => setFileModalOpen(false)}
        title="Confirm File Upload"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
       
        onConfirm={handleFileConfirm}
        showCloseIcon={true}

      >
       <FileUploadForm
 onFileSelect={(file: File): void => {}}
 /> 
         </Modal> */}
    </>
  );
}

export default App;
