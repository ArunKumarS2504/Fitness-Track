import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import vimg from "../utils/Images/vimg.jpg";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;

  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  }
`;
const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding:0 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary_hover};
  }
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Left>
        {/* <Logo src={LogoImage} alt="logo"/>
        <Image src={vimg} alt="background" /> */}
      </Left>
      <Right>
        {!login ? (
          <>
            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignUp</TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignIn</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;




// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const FormContainer = styled.div`
//   width: 400px;
//   padding: 40px;
//   background-color: ${({ theme }) => theme.bg_secondary};
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   font-weight: 700;
//   color: ${({ theme }) => theme.text_primary};
//   margin-bottom: 20px;
// `;

// const Span = styled.p`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text_secondary};
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px 0;
//   background-color: ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.text_button};
//   font-size: 16px;
//   font-weight: 600;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${({ theme }) => theme.primary_hover};
//   }
// `;

// const Link = styled.span`
//   color: ${({ theme }) => theme.primary};
//   font-weight: 600;
//   cursor: pointer;
// `;

// const Authentication = () => {
//   const [login, setLogin] = useState(false);

//   return (
//     <Container>
//       <FormContainer>
//         <Title>{login ? "Sign In" : "Sign Up"}</Title>
//         {!login ? (
//           <>
//             <Span>Create an account to get started.</Span>
//             {/* Render SignUp component here */}
//           </>
//         ) : (
//           <>
//             <Span>Welcome back! Sign in to continue.</Span>
//             {/* Render SignIn component here */}
//           </>
//         )}
//         <Button onClick={() => setLogin(!login)}>
//           {login ? "Sign In" : "Sign Up"} with Email
//         </Button>
//         <Span>
//           {login ? "Don't have an account? " : "Already have an account? "}
//           <Link onClick={() => setLogin(!login)}>
//             {login ? "Sign Up" : "Sign In"} instead
//           </Link>
//         </Span>
//       </FormContainer>
//     </Container>
//   );
// };

// export default Authentication;
