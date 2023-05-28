import Link from "next/link";
import Image from "next/image";
import { ErrorMainContainer } from "./error404.styles";

const ErrorPage = () => {
  return (
    <ErrorMainContainer>
      <Image src="/assets/error.svg" alt="error-img" width={220} height={220} />
      <h1>404</h1>
      <p>
        {`404 Page not found... Sorry, the page you are looking for doesn't exist
        or has been moved. Go back to the HomePage.`}
      </p>
      <Link href="/">Go Home</Link>
    </ErrorMainContainer>
  );
};

export default ErrorPage;
