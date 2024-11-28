import SuccessContainer from "@/components/SuccessContainer";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    session_id: string | null;
  };
}

const SuccessPage = ({ searchParams }: Props) => {
  const id = searchParams?.session_id;

  if (!id) {
    redirect("/");
  }

  return (
    <div>
      <SuccessContainer id={id} />
    </div>
  );
};

export default SuccessPage;
