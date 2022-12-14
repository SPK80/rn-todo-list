import AsyncStorage from "@react-native-async-storage/async-storage";

const HandleError = (error: string) => {
  console.error(error)
}

export const todosAPI = {
  async getAllItems() {
    try {
      const allIds = await AsyncStorage.getAllKeys();
      const allItems: TodoType[] = []
      allIds.map(async (id) => {
        const data = await this.getItem(id)
        if (data) allItems.push(data)
      })
      return allItems;
    } catch (error) {
      HandleError(error)
    }
  },
  async getItem(id: string) {
    try {
      const data = await AsyncStorage.getItem(id);
      if (!data) return HandleError(`Empty todo data of id:${id}`)
      const parsedData: TodoDataType = JSON.parse(data)
      return {id, ...parsedData} as TodoType
    } catch (error) {
      HandleError(error)
    }
  },
  async setItem(todo: TodoType) {
    try {
      const todoData = {...todo}
      await AsyncStorage.setItem(todo.id, JSON.stringify(todoData));
    } catch (error) {
      HandleError(error)
    }
  },
  async remove(id: string) {
    try {
      await AsyncStorage.removeItem(id)
    } catch (error) {
      HandleError(error)
    }
  },
  async clear() {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      HandleError(error)
    }
  }
}

export type TodoDataType = {
  title: string
  isDone: boolean
}

export type TodoType = TodoDataType & {
  id: string
}
