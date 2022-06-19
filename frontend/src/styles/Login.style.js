import styled from "styled-components";

export const FormSection = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    height:100vh; 
    margin-top: 7rem;
`;

export const FormTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
    text-align: center;
    font-family: 'Poppins', sans-serif;

`;

export const FormContainer = styled.div`
	display: flex;
    flex-direction: coloumn;
    justify-content: center;
    margin: 0 auto;
    
`;

export const FormColumn = styled.div`
    width: 360px;
    height: 425px;
    margin: auto;
    background-color: white;
    border-radius: 3px;
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const FormMessage = styled.div`
	color: red;
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;
	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
    border: 2px solid red;
    border-radius: 8px;
    padding: 5px;
`;


export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;

export const FormButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
`;

// export const LoginRedirect = styled.div `
//     color: green;
//     padding: 5px;
//     text-align: center;
//     margin-top: 1rem;
// `

// export const LoginMessage = styled.h3 `
//     margin-bottom: 24px;
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: 600;

// `