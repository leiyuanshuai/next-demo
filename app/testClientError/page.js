import React from "react";
import dynamic from "next/dynamic";
import Slider from "./Slider";
import WindowPage from "./window";
import WindowPage4 from "./window4";
const WithLoadingChart = dynamic(
  () => import('./Chart'),
  {
    loading: () => <p>Loading Chart...</p>,
    ssr: false
  }
)

export default function SimpleSlider() {
  // 在服务器住建局中引入客户端组件
  return (
    <>
      <div className="h-20 flex items-center justify-center">Import Third Library Example By YaYu</div>
      <div className="slider-container">
        <Slider>
        </Slider>
      </div>
      <WithLoadingChart />
      <WindowPage />
      <WindowPage4 />
    </>
  );
}
