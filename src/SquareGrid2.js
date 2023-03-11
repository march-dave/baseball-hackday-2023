import React, { useEffect, useState } from "react";
import data from "./tigerdata.json";

const SquareGrid = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let t = 0;

    data.forEach((c) => {
      console.log(c.salary);
      t += parseInt(c.salary, 10);
    });
    console.log(t);

    setTotal(
      t.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
    );
  }, []);

  return (
    <div className="wrapper">
      <div className="cover">
        <h1 className="cover-title cover-title-tigers">
          <span>Tigers Top 10 Annual Salary Players 2019</span>
          <p className="cover-salary">{total}</p>
        </h1>
      </div>
      <ul className="sq clearfix">
        {data.map((item, index) => (
          <li key={item.id} className="sq-item">
            <a className="sq-item-anchor" href="">
              <img
                className="sq-item-anchor-cover"
                src={item.picture}
                alt=""
              />
              <span className="sq-item-anchor-title">{item.name}</span>
              <span className="sq-item-anchor-title sq-item-anchor-salary">
                {item.salary.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
              <span className="sq-item-anchor-title">{item.pos}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SquareGrid;
