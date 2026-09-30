import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import HomePage from "@/pages/HomePage";

const MovieDetailPage = lazy(() => import("@/pages/MovieDetailPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:id" element={<MovieDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
