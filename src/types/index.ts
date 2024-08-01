type ApiType = "axios" | "prisma" | "unknown";
/**
 * "Response" 필수 타입을 지정한 타입
 */
export type ApiResponse<T> = {
    meta: { ok: boolean; type?: ApiType };
    data: { message: string } & T;
};
/**
 * 에러를 위한 "Response"
 */
export type ApiErrorResponse = ApiResponse<{}>;