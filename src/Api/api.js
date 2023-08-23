import axios from "axios";

const apiKey = "K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA";

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

const apiUrl = "/api/v1";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${apiUrl}/task`, { headers });
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching tasks:", error);
  }
};

export const addTask = async (title) => {
  try {
    const response = await axios.post(
      `${apiUrl}/task`,
      [{ title, completed: false }],
      { headers }
    );
    return response.data.items[0];
  } catch (error) {
    throw new Error("Error adding task:", error);
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.put(`${apiUrl}/task/${taskId}`, updatedTask, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error updating task:", error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${apiUrl}/task/${taskId}`, { headers });
  } catch (error) {
    throw new Error("Error deleting task:", error);
  }
};
