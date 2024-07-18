import { reactive } from "vue"

// ↓↓↓

import { desk2024 } from "./templates/desk2024"
import { dummy } from "./templates/dummy"

const templateList = [desk2024, dummy]

// ↑↑↑

const data = {
  templates: {},
  currentTemplateId: templateList[0].templateId
}

for (const template of templateList) {
  data.templates[template.templateId] = template
}

for (const templateId in data.templates) {
  const template = data.templates[templateId]
  for (const sectionId in template.sections) {
    const sectionContents = template.sections[sectionId]
    for (const optionName in sectionContents.sectionData) {
      const optionContent = sectionContents.sectionData[optionName]
      data.templates[templateId].sections[sectionId].sectionData[optionName]["defaultData"] = optionContent.data
    }
  }
}

export const store = reactive(data)
