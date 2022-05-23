function Employee() {
  return (
    <form className="border">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Фамилия
        </label>
        <div />
        <input
          type="text"
          className="form-control-lg"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          disabled
        />
        
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label ">
          Имя
        </label>
        <div />
        <input
          type="text"
          className="form-control-lg"
          id="exampleInputPassword1"
          disabled
        />
      </div>
    </form>
  );
}

export default Employee;
