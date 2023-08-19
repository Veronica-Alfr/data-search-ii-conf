"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIntervieweeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_interviewee_dto_1 = require("./create-interviewee.dto");
class UpdateIntervieweeDto extends (0, mapped_types_1.PartialType)(create_interviewee_dto_1.CreateIntervieweeDto) {
}
exports.UpdateIntervieweeDto = UpdateIntervieweeDto;
//# sourceMappingURL=update-interviewee.dto.js.map