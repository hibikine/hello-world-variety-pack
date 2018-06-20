(ns clojure-lang.core-test (:require [clojure.test :refer :all] [clojure-lang.core :refer :all]))

(deftest a-test (testing "Run main" (is (= (-main) nil))))

