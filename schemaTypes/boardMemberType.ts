// /studio-mustang-cricket/schemaTypes/boardMemberType.ts
import {defineField, defineType} from 'sanity'

export const boardMemberType = defineType({
  name: 'boardMember',
  title: 'Board Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Order in which to display the board member (lower numbers appear first)',
      validation: (rule) => rule.required(),
    }),
  ],
})
