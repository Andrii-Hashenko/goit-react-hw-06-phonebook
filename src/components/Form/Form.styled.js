import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 4px solid rgb(186, 146, 14);
  padding: 15px;
  text-transform: capitalize;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: black;
`;

export const FormInput = styled.input`
  width: 70%;
  margin-left: 20px;
  height: 28px;
  font-size: 14px;
  color: black;
  border: 2px solid rgb(186, 146, 14);
`;

export const FormButton = styled.button`
  margin-top: 44px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  padding: 5px;
  color: rgb(23, 23, 25);
  background-color: rgb(17, 88, 10);
  border: 3px solid rgb(186, 146, 14);
  border-radius: 10px;
`;
