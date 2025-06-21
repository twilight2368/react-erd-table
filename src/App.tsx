import { useEffect, useState } from "react";
import "./App.css";
import { RelationshipDiagram } from "react-erd";
import "react-erd/dist/style.css";
import dataJSON from "./data.json";
import { mapper } from "./utils";
import type { SchemaType } from "./types/schema";
function App() {
  const [schema, setSchema] = useState<SchemaType>();

  useEffect(() => {
    const data = dataJSON;
    setSchema(mapper(data));
  }, []);

  useEffect(() => {}, [schema]);

  return (
    <>
      <div className="w-screen h-screen">
        {schema ? (
          <>
            <RelationshipDiagram
              schemas={[schema]}
              onSchemasChange={() => {}}
              onCreateForeignKey={() => {}}
              onDeleteForeignKey={() => {}}
              onAttemptToRecreateExistingRelationship={() => {}}
              onAttemptToConnectColumnToItself={() => {}}
              onAttemptToDeleteConstrainedRelationship={() => {}}
              tableColors={["gray", "blue", "red", "green", "yellow"]}
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
