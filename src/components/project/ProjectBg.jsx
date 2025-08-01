import { motion, useTime, useTransform } from "framer-motion";

export default function ProjectBg({ children }) {
  const time = useTime();

  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const tinyRotate = useTransform(time, [0, 4000], [0, 720]);
  const smallRotate = useTransform(time, [0, 4000], [0, 540]);

  const tinyBox = {
    width: 40,
    height: 40,
    backgroundColor: "#9911ff",
    borderRadius: 5,
    rotate: tinyRotate,
  };

  const smallBox = {
    width: 80,
    height: 80,
    backgroundColor: "#dd00ee",
    borderRadius: 5,
    rotate: smallRotate,
  };

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
    rotate,
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <div style={{ ...layer, filter: "blur(4px)" }}>
        <div style={{ ...boxContainer, width: 500, gap: 80 }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div key={i} style={tinyBox} />
          ))}
        </div>
      </div>
      <div style={{ ...layer, filter: "blur(2px)" }}>
        <div style={{ ...boxContainer, width: 300 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div key={i} style={smallBox} />
          ))}
        </div>
      </div>
      <div style={layer}>
        <div style={boxContainer}>
          <motion.div style={box} />
        </div>
      </div>
      {children}
    </div>
  );
}

const layer = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
};

const boxContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 50,
  flexWrap: "wrap",
};
