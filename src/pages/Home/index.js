import { CardMainPost } from "components/Cards";
import { mockPostData } from "shared/MockData";
import { Container, Row, Col } from "reactstrap";

export default function Home() {
  return (
    <>
      <Container>
        {mockPostData.map((data, index) => (
          <div key={"postData" + index}>
            <CardMainPost {...data} />
          </div>
        ))}
      </Container>
    </>
  );
}
