import {createRoot, useFrame} from '@react-three/fiber';
import {useRef, useState} from "react";
import {StyledMainCanvas} from "../../styles/Home.style";

const Box = (props) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.x += 0.01
        ref.current.rotation.z -= 0.01
    })
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 2 : 2}
            onClick={(event) => setClicked(!clicked)}
            onPointerOver={(event) => setHovered(true)}
            onPointerOut={(event) => setHovered(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? '#FFA500' : '#FFE211'} />
        </mesh>
    )
}
const MainCanvas = () => {
    return <>
        <StyledMainCanvas resize={{ debounce: 0 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]}/>
        </StyledMainCanvas>
    </>
};

export default MainCanvas;
