import { Page } from "next/app";

export const getServerSideProps = async (ctx: any) => {
  console.log(ctx.req.cookie);

  return {
    props: {
      username: "",
    },
  };
};

const UserPage: Page<User> = () => {
  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

export default UserPage;
