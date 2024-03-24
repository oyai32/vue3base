import { ElMessage } from 'element-plus';

export default function (error: Error) {
  if (error && error.name === 'Error') {
    ElMessage.error(error.message);
  }
}
