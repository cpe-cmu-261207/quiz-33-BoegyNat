import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner
          pic={"/profileImages/mostHandsome.jpg"}
          name={"Nat Ucharattana 640610632"}
          text={"ควิซยากไม่ไหวแง้วววว ยากเกินปุยม้ยยย #261207"}
          like={"798M คน"}
        />

        {/* Comment Example */}
        <Comment comments={comments} />

        {/* Reply Example */}
      </div>
    </div>
  );
}
