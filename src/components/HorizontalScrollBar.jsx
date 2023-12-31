import { Box } from "@mui/material";
import BodyPart from "./BodyPart";


const HorizontalScrollBar = ({ data ,bodyPart,setBodyPart }) => {
  return (
    <>
      {data.map((item) => (
        <Box 
        key={item?.id||item}
        itemId={item?.id||item}
        title={item?.id||item}
        m="0 40px"
        >
          <BodyPart bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </>
  );
};

export default HorizontalScrollBar;
