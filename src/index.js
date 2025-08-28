import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "rsuite/styles/index.less";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(

    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor="#202020" highlightColor="red">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>
        </Provider>
      </SkeletonTheme>
    </QueryClientProvider>

);


