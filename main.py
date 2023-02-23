import random


def main():
    print("is it a real coin flip sequence?")
    flip_count = 100
    sequence = get_flip_sequence(flip_count)
    print_sequence_stats(sequence)


def print_sequence_stats(flips):
    print_flips(flips)
    runs = get_runs(flips)
    run_counts = get_run_counts(runs)
    print(f"run counts = {run_counts}")


def print_flips(flips):
    printable = ""
    for flip in flips:
        printable += flip
    print(printable)


def get_runs(flips):
    all_runs = []
    current_run = flips[0]
    for i in range(1, len(flips)):
        if flips[i] == flips[i-1]:
            current_run += flips[i]
        else:
            all_runs.append(current_run)
            current_run = flips[i]
    return all_runs


def get_run_counts(runs):
    counts = [0]
    print(runs)
    for run in runs:
        if len(counts) - 1 < len(run):
            for i in range(len(run) - len(counts) + 1):
                counts.append(0)
        counts[len(run)] += 1
    return counts
    # longest_start = 0
    # current_run = 1
    # current_start = 0
    # for i in range(1, len(flips)):
    #     if flips[i] == flips[i-1]:
    #         current_run += 1
    #     else:
    #         current_run = 1
    #         current_start = i
    #     if current_run > longest_run:
    #         longest_run = current_run
    #         longest_start = current_start
    # return [longest_run, longest_start]


def get_flip_sequence(n):
    output = ""
    for i in range(n):
        output += get_flip()
    return output


def get_flip():
    output = ""
    x = random.random()
    if x < 0.5:
        output = "H"
    else:
        output = "T"
    return output


main()