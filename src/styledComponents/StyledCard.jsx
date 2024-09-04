import styled from 'styled-components'


const StyledCard = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 15px;
    margin: 0 auto;
    border-radius: .5rem;
    background: ${props => {
        if (props.correct === true) return 'radial-gradient(var(--lightgreen), var(--green))'
        if (props.correct === false) return 'radial-gradient(var(--light), var(--lightred))'
        return 'radial-gradient(var(--lighter), var(--light))'
    }};
    color: var(--dark);
`
// width: ${props => (props.big ? '450px' : '300px')};
// transform: translateY(50px);
// transition: 500ms all ease-in-out;
// background: radial-gradient(lightcoral, salmon);
// background: radial-gradient(burlywood, salmon);
// background: radial-gradient(slateblue, darkslateblue);
// box-shadow: 0 5px 15px -5px rgba(150, 150, 150, 1);


export default StyledCard