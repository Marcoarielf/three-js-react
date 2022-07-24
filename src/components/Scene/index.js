import { useRef, useEffect } from "react";
import clsx from "clsx";
import * as THREE from "three";
import styles from "../Scene/styles.module.scss";

const Scene = () => {
  const mountRef = useRef(null);
  const style = clsx([styles["chasis-button"]]);

  useEffect(() => {
    const currentMout = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25, // fov: field of view.
      currentMout.clientWidth / currentMout.clientHeight, // aspect of the camera.
      0.1, // que tan cerca y q tan lejos vemos los obj
      1000 // que tan lejos vemos los obj
    );

    scene.add(camera);

    const rendered = new THREE.WebGL1Renderer();
    rendered.setSize(currentMout.clientWidth, currentMout.clientHeight);

    currentMout.appendChild(rendered.domElement);
  }, []);
  return (
    <div ref={mountRef} className={style}>
      Hi
    </div>
  );
};
export default Scene;
