import { CardMainPost } from "components/Cards";
import { mockPostData } from "shared/MockData";

export default function Home() {
  return (
    <>
      {mockPostData.map((data, index) => (
        <div key={"postData" + index}>
          <CardMainPost {...data} />
        </div>
      ))}
    </>
  );
}
