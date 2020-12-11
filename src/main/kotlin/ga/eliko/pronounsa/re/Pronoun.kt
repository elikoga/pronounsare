package ga.eliko.pronounsa.re

import io.micronaut.core.annotation.Introspected

@Introspected
class Pronoun(
        val subjectP: String,
        val objectP: String,
        val dependentPossessiveP: String,
        val independentPossessiveP: String,
        val reflexiveP: String) {

    fun matchesCount(candidates: List<String>): Int {
        var count = 0
        candidates.map {
            asList().map{pronoun: String ->
                if(it == pronoun) count++
            }
        }
        return count
    }

    fun asList(): List<String> {
        return listOf(subjectP, objectP, dependentPossessiveP, independentPossessiveP, reflexiveP)
    }
}
