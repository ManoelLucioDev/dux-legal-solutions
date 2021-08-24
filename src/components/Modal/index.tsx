
import styled from 'styled-components';

interface Props {
    children: any;
    visible: boolean;
    setVisible: any
  }


const ModalBackground = styled.div`
    position:fixed;
    width:100%;
    left:0;
    top:0;
    rigth:0;
    bottom:0;
    z-index:90;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ModalArea = styled.div`
background-color:#fff;
color:#150760;
border-radius: 10px;
padding:15px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

function Modal(props: Props){

    const handleBackgroundClick = () => {
        props.setVisible(false)
    }

    return(
    <>
        {props.visible &&
        <ModalBackground onClick={handleBackgroundClick}>
            <ModalArea>
                {props.children}
            </ModalArea>
        </ModalBackground>
        }
    </>
    );

}

export default Modal;