import React, { useState } from "react";

//create your first component
const Trafficlight = () => {
	const [colorLight, setColorLight] = useState("");

	return (
		<div className="d-flex justify-content-center flex-column align-items-center">
			<div className="tick"></div>
			<div className="body d-flex flex-column bg-warning align-items-center">
				<button onClick={() => setColorLight("red")}
					className={`btn btn-${colorLight === "red" ? 'danger' : 'secondary'} rounded-circle m-4`}
					style={{ width: "110px", height: "110px", border: "10px solid black" }}>
				</button>
				<button onClick={() => setColorLight("yellow")}
					className={`btn btn-${colorLight === "yellow" ? 'warning' : 'secondary'} rounded-circle m-4`}
					style={{ width: "110px", height: "110px", border: "10px solid black" }}>
				</button>
				<button onClick={() => setColorLight("green")}
					className={`btn btn-${colorLight === "green" ? 'success' : 'secondary'} rounded-circle m-4`}
					style={{ width: "110px", height: "110px", border: "10px solid black" }}>
				</button>
			</div>
		</div>
	);
};
export default Trafficlight;
