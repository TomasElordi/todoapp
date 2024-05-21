import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export default function TasksView() {
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      done: false,
    },
    {
      id: 2,
      name: "Task 2",
      done: true,
    },
    {
      id: 3,
      name: "Task 3",
      done: false,
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Task</h1>
        <Button className="ml-auto" size="sm">
          Add task
        </Button>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Done</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.name}</TableCell>
                <TableCell>
                  <Checkbox
                    defaultChecked={task.done}
                    className="self-center"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
