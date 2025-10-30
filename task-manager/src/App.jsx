import { TaskList } from './TaskList';

<BrowserRouter>
    <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskList />} />
    </Routes>
</BrowserRouter>