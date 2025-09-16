// zod configration

import { z } from 'zod';


export  const userDataSchema = z.object({

 
  name:z.string().min(3,'min is 3').max(25,'max is 25 '),
  bio:z.string().optional(),
  profile:z.string().optional(),
  links: z.array(z.object({
    titleName: z.string().min(1, "Title is required"),
    linkUrl: z.string().url("Please enter a valid URL")
  })).min(1, "At least one link is required")

})
