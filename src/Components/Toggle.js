const Toggle = (_) => {
    const Data = [
      {
        name: "The WET Codbase",
        date: "Sunday 4th, 2020 11min read",
        description: "Come waste your time with me",
      },
      {
        name: "Goodby, Clean Code",
        date: "Friday 22nd, 2019 5min read",
        description: "Let clean code guide you, Then let it go",
      },
      {
        name: "My Decade In Review",
        date: "Saturday 11th, 2018 5 min read",
        description: "A personal reflection",
      },
      {
        name: "What Are The React Team Principles",
        date: "Thursday 4th, 2015 5 min read",

      },
    ];
  
    return (
      <>
        {Data.map((e, idx) => {
          return (
            <div key={idx} className="content">
              <div className="darkview">
                <h2  className="h2">{e.name}</h2>
                <span className="date">{e.date}</span>
                <span className="desc">{e.description}</span>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  
  export default Toggle;
  