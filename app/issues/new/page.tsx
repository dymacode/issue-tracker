'use client';
import { TextField} from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { Button } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Title'>
      </TextField.Root>
      <SimpleMDE placeholder='Descrption'/>
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage
