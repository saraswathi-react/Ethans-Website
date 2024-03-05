import React, { useEffect, useState } from "react";
import { StylesCounter } from "../Style";

const Counterss = ({ target, start, className }) => {
  const [count, setCount] = useState(start || 0); // Initialize count with the start prop or 0 if not provided
  const speed = 2000; // Adjust the speed here. The higher the value, the slower the animation.

  useEffect(() => {
    const updateCount = () => {
      const inc = (target - count) / speed; // Calculate increment based on the difference between target and current count

      if (count < target) {
        setCount(prevCount => prevCount + inc);
        setTimeout(updateCount, 1);
      } else {
        setCount(target);
      }
    };

    updateCount();

    // Cleanup function to clear timeouts
    return () => clearTimeout();
  }, [target]);

  return <h1 className={className}>{Math.floor(count)} {target === 78 ? "+" : ""}</h1>;
};

const Counter = () => {


  return (
    <StylesCounter>
      <div>
        <h1 className="title-head">
          Building <span style={{ color: "#f96156" }}>enduring</span> value
          through <div> bold strategies</div>
        </h1>

        {/* <div className="totalNumbers">
          <div className="contents">
            <div className="line"></div>
            <div>
              <h1 className="number">1 2 9</h1>
              <p className="content">CASES COMPLETED</p>
            </div>
          </div>
          <div className="contents">
            <div className="line"></div>
            <div>
              <h1 className="number">1 2 9</h1>
              <p className="content">CASES COMPLETED</p>
            </div>
          </div>
          <div className="contents">
            <div className="line"></div>
            <div>
              <h1 className="number">1 2 9</h1>
              <p className="content">CASES COMPLETED</p>
            </div>
          </div>
          <div className="contents">
            <div className="line"></div>
            <div>
              <h1 className="number">1 2 9</h1>
              <p className="content">CASES COMPLETED</p>
            </div>
          </div>
        </div> */}

<div className="totalNumbers">
      <div className="contents">
        <div className="line"></div>
        <div>
          <Counterss className="number" target={129} start={110}/>
          <p className="content">CASES COMPLETED</p>
        </div>
      </div>
      <div className="contents">
        <div className="line"></div>
        <div>
          <Counterss className="number" target={18} start={10} />
          <p className="content">SERVICES</p>
        </div>
      </div>
      <div className="contents">
        <div className="line"></div>
        <div>
          <Counterss className="number" target={78} start={72} />
          <p className="content">AWARDS WINNING</p>
        </div>
      </div>
      <div className="contents">
        <div className="line"></div>
        <div>
          <Counterss className="number" target={758} start={750} />
          <p className="content">SATISFIED CUSTOMERS</p>
        </div>
      </div>
    </div>
      </div>
    </StylesCounter>
  );
};

export default Counter;
