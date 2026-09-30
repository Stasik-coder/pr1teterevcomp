import Greeting from "./Greeting";
import TaskList from "./TaskList";
import ActionButton from "./ActionButton";
import ProfileCard from "./ProfileCard";
import ImageGallery from "./ImageGallery";

function App() {
  return (
    <div>
      <Greeting />

      <h2>Мои задачи</h2>
      <TaskList />

      <ActionButton />

      <ProfileCard />

      <h2>Галерея</h2>
      <ImageGallery />
    </div>
  );
}

export default App;