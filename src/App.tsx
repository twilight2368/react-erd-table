import { useEffect, useState } from "react";
import "./App.css";
import { RelationshipDiagram } from "react-erd";
import "react-erd/dist/style.css";
import dataJSON from "./data_v.json";
import { mapper } from "./utils";
import type { ModelType } from "./types/model";
function App() {
  const [data, setData] = useState<ModelType[]>(dataJSON);
  const [schema, setSchema] = useState();

  useEffect(() => {
    setSchema(mapper(data));
  }, []);

  return (
    <>
      <div className="w-screen h-screen">
        {schema ? (
          <>
            {" "}
            <RelationshipDiagram
              schemas={schema}
              onSchemasChange={() => {}}
              onCreateForeignKey={() => {}}
              onDeleteForeignKey={() => {}}
              onAttemptToRecreateExistingRelationship={() => {}}
              onAttemptToConnectColumnToItself={() => {}}
              onAttemptToDeleteConstrainedRelationship={() => {}}
              tableColors={["gray"]}
            />
          </>
        ) : (
          <>Loading ...</>
        )}
      </div>
    </>
  );
}

export default App;
