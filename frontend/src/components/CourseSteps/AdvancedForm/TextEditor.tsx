
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
interface props{
  value?:string;
  setValue:(param:string)=>void;
}
const TextEditor = ({value="",setValue}:props) => {
  

  return (
    <div className="p-4">
      <div className="font-bold py-3"> Course Descriptions</div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={{
          toolbar: {
            container: "#custom-toolbar",
          },
        }}
        placeholder="Enter your Course Descriptions"
        className=" h-40"
      />

      <div id="custom-toolbar">
        <select className="ql-header" defaultValue="">
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="">Normal</option>
        </select>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-link" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
      </div>
    </div>
  );
};

export default TextEditor;
