import React from 'react'

const Upcoming = () => {
  return (
    <div className="upcoming-container">
      <ul className="outside-list">
        <li>More and more elements
          <p>hundreds of new styled html elements</p>
        </li>
        <li>Beautify code
          <ul className="inside-list">
            <li>
              <h3>Html code</h3>
              <p>&lt;button type="button" class="btn-hover-2"&gt;Hover Me&lt;/button&gt;</p>
              <h3>Css code</h3>
              <p>.btn-hover-2, width : 150px; height: 50px; outline: none; background-color: transparent; border-radius: 4px; box-shadow: rgb(127, 0, 255) 0px 0px 0px 0px inset; transition: all 0.5s ease-in 0s; font-size: 20px; color: rgb(127, 0, 255); font-weight: 400; border: 2px solid rgb(127, 0, 255); ,.btn-hover-2:hover, box-shadow: rgb(127, 0, 255) 200px 0px 0px 0px inset; cursor: pointer; color: rgb(255, 255, 255); </p>
            </li>
            <li className="beautfied-code">
              <h3>Html code</h3>
              <pre lang="html">{
`<button type="button" class="btn-hover-2">
  Hover Me
</button>`
              }</pre>
              <h3>Css code</h3>
              <pre lang="css">{
`.btn-hover-2{
  width : 150px;
  height: 50px;
  outline: none;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: rgb(127, 0, 255) 0px 0px 0px 0px inset;
  transition: all 0.5s ease-in 0s;
  font-size: 20px;
  color: rgb(127, 0, 255);
  font-weight: 400;
  border: 2px solid rgb(127, 0, 255);
}
.btn-hover-2:hover{
  box-shadow: rgb(127, 0, 255) 200px 0px 0px 0px inset;
  cursor: pointer;
  color: rgb(255, 255, 255);
}`}
              </pre>
            </li>
          </ul>
        </li>
        <li>Styled Reactjs components
          <p>styled navbar,forms,footers,cards,and more all in react.js</p>
        </li>
      </ul>
    </div>
  )
}

export default Upcoming