import React from "react";

export default function Search(props) {
  return (
    <div className="bottom">
      <form className="search" action="#" method="post">
        <input type="text" name="insurance" placeholder="Insurance Provider" />
        <input type="button" name="submit" value="SEARCH" onClick={props.fetchData}/>
      </form>
    </div>
  );
}
