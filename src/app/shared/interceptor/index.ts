// Here we will register all the interceptor

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error.interceptor";
import { HeaderInterceptor } from "./header.interceptor";
import { LogInterceptor } from "./log.interceptor";
import { TokenInterceptor } from "./token.interceptor";

// register different interceptor like if we need one set of headers and token put them into one array, and if we need header and log file then use use other array

export const HttpInterceptor = [
    {
        provide: HTTP_INTERCEPTORS, // interceptors are background services
        useClass: HeaderInterceptor, // implimention of the interceptor
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, // interceptors are background services
        useClass: LogInterceptor, // implimention of the interceptor
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, // interceptors are background services
        useClass: TokenInterceptor, // implimention of the interceptor
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, // interceptors are background services
        useClass: ErrorInterceptor, // implimention of the interceptor
        multi: true
    },
]