import styled from 'styled-components';
export const List = styled.ul`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 0;
`;
export const ContactListItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const ContactListNumber = styled.span`
  color: rgb(52, 49, 40);
`;

export const ContactListButton = styled.button`
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
