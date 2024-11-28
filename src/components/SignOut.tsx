import { signOut } from "@/auth";

const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="border border-gray-400 px-4 py-2 text-sm font-semibold rounded-md hover:bg-gray-800 hover:text-white duration-300 ease-in-out"
      >
        Sign Out
      </button>
    </form>
  );
};

export default SignOut;
