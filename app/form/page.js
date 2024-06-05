import { findToDos, createToDo } from './actions';
import Button from './button';

export default async function Page() {
  const todos = await findToDos();
  return (
    <div className="form">
      <h2>下面是第一个form表单</h2>
      <form action={createToDo}>
        <input type="text" name="todo" className="inp" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <Button>添加运动</Button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
